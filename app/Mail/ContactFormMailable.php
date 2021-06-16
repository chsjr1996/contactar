<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormMailable extends Mailable
{
    use Queueable, SerializesModels;

    /** @var string */
    public $name;

    /** @var string */
    public $email;

    /** @var string */
    public $phone;

    /** @var string */
    public $content;

    /** @var string */
    private $file_path;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $email, $phone, $content, $file_path)
    {
        $this->name = $name;
        $this->email = $email;
        $this->phone = $phone;
        $this->content = $content;
        $this->file_path = $file_path;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(env('MAIL_FROM_ADDRESS'))
            ->view('emails.contact-form')
            ->attach(storage_path('app/' . $this->file_path));
    }
}
