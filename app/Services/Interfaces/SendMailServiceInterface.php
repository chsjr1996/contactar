<?php

namespace App\Services\Interfaces;

interface SendMailServiceInterface
{
    public function run(array $data, string $mailTo): bool;
}
