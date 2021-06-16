<?php

namespace App\Repositories\Eloquent;

use Illuminate\Database\Eloquent\Collection;

abstract class AbstractRepository
{
    protected $model;

    public function __construct()
    {
        $this->model = $this->resolveModel();
    }

    /**
     * Return a instance of specified model
     */
    public function resolveModel()
    {
        return app($this->model);
    }

    /**
     * Persist data
     */
    public function insert($data)
    {
        return $this->model->insert($data);
    }
}
