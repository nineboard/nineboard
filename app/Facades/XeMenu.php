<?php
/**
 * XeMenu.php
 *
 * PHP version 7
 *
 * @category    Menu
 * @package     Xpressengine\Menu
 * @author      XE Developers <developers@xpressengine.com>
 * @copyright   2019 Copyright XEHub Corp. <https://www.xehub.io>
 * @license     http://www.gnu.org/licenses/lgpl-3.0-standalone.html LGPL
 * @link        https://xpressengine.io
 */

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * Class XeMenu
 *
 * @category    Menu
 * @package     Xpressengine\Menu
 * @author      XE Developers <developers@xpressengine.com>
 * @copyright   2019 Copyright XEHub Corp. <https://www.xehub.io>
 * @license     http://www.gnu.org/licenses/lgpl-3.0-standalone.html LGPL
 * @link        https://xpressengine.io
 * @see         Xpressengine\Menu\MenuHandler
 */
class XeMenu extends Facade
{

    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'xe.menu';
    }
}
