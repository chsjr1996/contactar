<?php

namespace App\Repositories\Eloquent;

use App\Models\Contact;
use App\Repositories\Contracts\ContactRepositoryInterface;

class ContactRepository extends AbstractRepository implements ContactRepositoryInterface
{
    protected $model = Contact::class;
}
