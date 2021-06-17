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

        $this->contact = $this->createMock(Contact::class);

        $this->contact->name = 'Carlos H';
        $this->contact->email = 'carlos@contactar.com';
        $this->contact->phone = '(11) 1111-1111';
        $this->contact->message = 'you shall pass!';
    }

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function test_template_render_should_be_correct()
    {
        $this->contact->file_name = 'file_size_500kb.txt';

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
