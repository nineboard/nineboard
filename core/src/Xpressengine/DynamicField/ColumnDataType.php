<?php
/**
 * ColumnDataType
 *
 * PHP version 7
 *
 * @category    DynamicField
 * @package     Xpressengine\DynamicField
 * @author      XE Developers <developers@xpressengine.com>
 * @copyright   2020 Copyright XEHub Corp. <https://www.xehub.io>
 * @license     http://www.gnu.org/licenses/lgpl-3.0-standalone.html LGPL
 * @link        https://xpressengine.io
 */

namespace Xpressengine\DynamicField;

/**
 * ColumnDataType
 *
 * @category    DynamicField
 * @package     Xpressengine\DynamicField
 * @author      XE Developers <developers@xpressengine.com>
 * @copyright   2020 Copyright XEHub Corp. <https://www.xehub.io>
 * @license     http://www.gnu.org/licenses/lgpl-3.0-standalone.html LGPL
 * @link        https://xpressengine.io
 */
class ColumnDataType
{
    public const INTEGER = 'integer';
    public const BIGINTEGER = 'bigInteger';
    public const MEDIUMINTEGER = 'mediumInteger';
    public const SMALLINTEGER = 'smallInteger';
    public const TINYINTEGER = 'tinyInteger';

    public const FLOAT = 'float';
    public const DOUBLE = 'double';
    public const DECIMAL = 'decimal';

    public const BOOLEAN = 'boolean';
    public const ENUM = 'enum';

    public const BINARY = 'binary';

    public const CHAR = 'char';
    public const STRING = 'string';
    public const TEXT = 'text';
    public const MEDIUMTEXT = 'mediumText';
    public const LONGTEXT = 'longText';

    public const DATE = 'date';
    public const DATETIME = 'dateTime';
    public const TIMESTAMP = 'timestamp';
    public const TIME = 'time';
}
