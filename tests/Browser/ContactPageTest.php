<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ContactPageTest extends DuskTestCase
{
    public function testContactPageTitle()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/contact')
                ->assertSee('Contact form');
        });
    }
}
