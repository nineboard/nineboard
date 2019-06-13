<?php

namespace App\Http\Controllers;

use XePresenter;
use Xpressengine\Http\Request;
use Xpressengine\Plugin\PluginHandler;

class ThemeSettingsController extends Controller
{
    public function __construct()
    {
        XePresenter::setSettingsSkinTargetId('plugins');

        app('xe.frontend')->js('assets/core/xe-ui-component/js/xe-form.js')->load();
        app('xe.frontend')->js('assets/core/xe-ui-component/js/xe-page.js')->load();
        app('xe.frontend')->js('assets/core/plugin/js/plugin-index.js')->before(
            [
                'assets/core/xe-ui-component/js/xe-page.js',
                'assets/core/xe-ui-component/js/xe-form.js'
            ]
        )->load();
    }

    public function installed(Request $request, PluginHandler $handler)
    {
        $plugins = $handler->getAllThemes(true);
        $unresolvedComponents = $handler->getUnresolvedComponents();

        return XePresenter::make('theme.installed', compact(
            'handler',
            'plugins',
            'unresolvedComponents'
        ));
    }

    public function install(Request $request)
    {
        return XePresenter::make('theme.install');
    }
}
