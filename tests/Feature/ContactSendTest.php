<?php

namespace Tests\Feature;

use Tests\TestCase;

class ContactSendTest extends TestCase
{
    public function test_contact_page_should_return_200()
    {
        $response = $this->get('/contact');
        $response->assertStatus(200);
    }
}
