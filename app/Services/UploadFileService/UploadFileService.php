<?php

namespace App\Services\UploadFileService;

use App\Services\Interfaces\UploadServiceInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Storage;

class UploadFileService implements UploadServiceInterface
{
    /**
     * @param UploadedFile $file
     * @param string $directory
     * @param string $name
     *
     * @return string
     */
    public function run(UploadedFile $file, string $directory, string $name = null): string
    {
        $fileName = $name;
        $fileExtension = $file->getClientOriginalExtension();
        $fileOriginalName = $file->getClientOriginalName();

        if (!$name) {
            $fileName = uniqid(str_replace('.' . $fileExtension, '', $fileOriginalName));
            $fileName .= ".{$fileExtension}";
        }

        $filePath = "{$directory}/{$fileName}";
        $fileContent = file_get_contents($file);

        if (!Storage::disk('local')->put($filePath, $fileContent)) {
            return '';
        }

        return $filePath;
    }
}
