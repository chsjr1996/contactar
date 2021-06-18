<?php

namespace App\Services\SendMailService;

use App\Services\Interfaces\SendMailServiceInterface;
use Illuminate\Mail\Mailable;
use Mail;

class SendMailService implements SendMailServiceInterface
{
    public function run(Mailable $mailable, string $mail_to): bool
    {
        try {
            Mail::to($mail_to)->send($mailable);
            return true;
        } catch (\Exception $ex) {
            return false;
        }
    }
}
