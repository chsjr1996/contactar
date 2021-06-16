<?php

namespace App\Services\Interfaces;

use Symfony\Component\HttpFoundation\File\UploadedFile;

interface UploadServiceInterface
{
    public static function run(UploadedFile $file, string $directory, string $name = null): string;
}
