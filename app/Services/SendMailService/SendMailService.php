<?php

namespace App\Services\SendMailService;

use App\Jobs\SendFormEmailJob;
use App\Services\Interfaces\SendMailServiceInterface;

class SendMailService implements SendMailServiceInterface
{
    public function run(array $data, string $mailTo): bool
    {
        try {
            dispatch(new SendFormEmailJob($data, env('MAIL_TO_ADDRESS')));

            return true;
        } catch (\Exception $ex) {
            return false;
        }
    }
}
