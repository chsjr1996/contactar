<?php

namespace Tests\Unit;

use App\Models\Contact;
use Tests\TestCase;

class ContactModelTest extends TestCase
{
    private Contact $contact;

    public function setUp(): void
    {
        parent::setUp();

        $this->contact = new Contact();
    }

    public function test_contact_should_be_correct_fillable_fields()
    {
        $expected = [
            'name',
            'email',
            'phone',
            'ip',
            'message',
            'file_name',
        ];

        $diff = array_diff($expected, $this->contact->getFillable());

        $this->assertEquals(0, count($diff));
    }
}
