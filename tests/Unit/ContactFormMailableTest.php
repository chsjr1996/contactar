<?php

namespace Tests\Unit;

use App\Mail\ContactFormMailable;
use App\Models\Contact;
use Tests\TestCase;

class ContactFormMailableTest extends TestCase
{
    private Contact $contact;

    public function setUp(): void
    {
        parent::setUp();

        $this->contact = Contact::factory()->make();
    }

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function test_template_render_should_be_correct()
    {
        $data = [
            'name' => $this->contact->name,
            'email' => $this->contact->email,
            'phone' => $this->contact->phone,
            'content' => $this->contact->message,
        ];

        $contactMailableView = (new ContactFormMailable(
            $this->contact->name,
            $this->contact->email,
            $this->contact->phone,
            $this->contact->message,
            $this->contact->file_name
        ))->build()->render();

        $expectedView = view('emails.contact-form', $data)->render();

        $this->assertEquals($expectedView, $contactMailableView);
    }
}
