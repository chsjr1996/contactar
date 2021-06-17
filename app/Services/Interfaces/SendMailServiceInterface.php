<?php

namespace App\Services\Interfaces;

use Illuminate\Mail\Mailable;

interface SendMailServiceInterface
{
    public function run(Mailable $mailableClass, string $mail_to): void;
}
