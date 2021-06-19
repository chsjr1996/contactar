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

    public function testContactPageHeaderNavigateToHome()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/contact')
                ->assertSee('Contactar')
                ->click('#header-app-name')
                ->pause(1000)
                ->assertSee('About "Contactar"');
        });
    }
}
