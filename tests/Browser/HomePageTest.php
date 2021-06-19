<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class HomePageTest extends DuskTestCase
{
    public function testHomePageTexts()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                ->assertSee('About "Contactar"')
                ->assertSee('Fork me on Github')
                ->assertSee('Contact page');
        });
    }

    public function testHomePageNavigateToContact()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                ->assertSee('Contact page')
                ->click('button.btn.btn-primary')
                ->pause(1000)
                ->assertSee('Contact form');
        });
    }
}
