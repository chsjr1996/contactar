<?php

namespace Tests\Feature;

use App\Models\Contact;
use App\Repositories\Contracts\ContactRepositoryInterface;
use App\Services\Interfaces\SendMailServiceInterface;
use App\Services\Interfaces\UploadServiceInterface;
use Illuminate\Http\UploadedFile;
use Tests\TestCase;

class ContactSendTest extends TestCase
{
    private Contact $contact;

    public function setUp(): void
    {
        parent::setUp();

        $this->contact = Contact::factory()->make();

        $contactRepository = $this->mock(ContactRepositoryInterface::class);
        $contactRepository->shouldReceive('insert')->andReturn($this->contact);
        $this->app->instance(ContactRepositoryInterface::class, $contactRepository);

        $uploadService = $this->mock(UploadServiceInterface::class);
        $uploadService->shouldReceive('run')->andReturn('file_size.txt');
        $this->app->instance(UploadServiceInterface::class, $uploadService);

        $sendMailService = $this->mock(SendMailServiceInterface::class);
        $sendMailService->shouldReceive('run')->andReturn(true);
        $this->app->instance(SendMailServiceInterface::class, $sendMailService);
    }

    public function test_contact_page_should_return_200()
    {
        $response = $this->get('/contact');
        $response->assertStatus(200);
    }

    public function test_contact_send_action_with_correct_fields_should_return_200()
    {
        $this->withoutExceptionHandling();

        $response = $this->post('/contact', [
            'name' => $this->contact->name,
            'email' => $this->contact->email,
            'phone' => $this->contact->phone,
            'message' => $this->contact->message,
            'attachment' => UploadedFile::fake()->create('file_size.txt', 62.5),
            'ip' => $this->contact->ip
        ], ['Content-Type' => 'multipart/form-data']);

        $response->assertStatus(200);
    }

    public function test_contact_send_with_invalid_name_should_return_correct_session_error()
    {
        $response = $this->post('/contact', [
            'name' => '',
            'email' => $this->contact->email,
            'phone' => $this->contact->phone,
            'message' => $this->contact->message,
            'attachment' => UploadedFile::fake()->create('file_size.txt', 62.5),
            'ip' => $this->contact->ip
        ], ['Content-Type' => 'multipart/form-data']);

        $response->assertSessionHasErrors(['name']);
    }

    public function test_contact_send_with_invalid_email_should_return_correct_session_error()
    {
        $response = $this->post('/contact', [
            'name' => $this->contact->name,
            'email' => 'archlinux.org',
            'phone' => $this->contact->phone,
            'message' => $this->contact->message,
            'attachment' => UploadedFile::fake()->create('file_size.txt', 62.5),
            'ip' => $this->contact->ip
        ], ['Content-Type' => 'multipart/form-data']);

        $response->assertSessionHasErrors(['email']);
    }

    public function test_contact_send_with_invalid_phone_should_return_correct_session_error()
    {
        $response = $this->post('/contact', [
            'name' => $this->contact->name,
            'email' => $this->contact->email,
            'phone' => '1111',
            'message' => $this->contact->message,
            'attachment' => UploadedFile::fake()->create('file_size.txt', 62.5),
            'ip' => $this->contact->ip
        ], ['Content-Type' => 'multipart/form-data']);

        $response->assertSessionHasErrors(['phone']);
    }

    public function test_contact_send_with_invalid_message_should_return_correct_session_error()
    {
        $response = $this->post('/contact', [
            'name' => $this->contact->name,
            'email' => $this->contact->email,
            'phone' => $this->contact->phone,
            'message' => '',
            'attachment' => UploadedFile::fake()->create('file_size.txt', 62.5),
            'ip' => $this->contact->ip
        ], ['Content-Type' => 'multipart/form-data']);

        $response->assertSessionHasErrors(['message']);
    }

    public function test_contact_send_with_bigger_file_should_return_correct_session_error()
    {
        $response = $this->post('/contact', [
            'name' => $this->contact->name,
            'email' => $this->contact->email,
            'phone' => $this->contact->phone,
            'message' => $this->contact->message,
            'attachment' => UploadedFile::fake()->create('file_size.txt', 63.5),
            'ip' => $this->contact->ip
        ], ['Content-Type' => 'multipart/form-data']);

        $response->assertSessionHasErrors(['attachment']);
    }

    public function test_contact_send_with_incorrect_ip_should_return_correct_session_error()
    {
        $response = $this->post('/contact', [
            'name' => $this->contact->name,
            'email' => $this->contact->email,
            'phone' => $this->contact->phone,
            'message' => $this->contact->message,
            'attachment' => UploadedFile::fake()->create('file_size.txt', 62.5),
            'ip' => '01234'
        ], ['Content-Type' => 'multipart/form-data']);

        $response->assertSessionHasErrors(['ip']);
    }
}
