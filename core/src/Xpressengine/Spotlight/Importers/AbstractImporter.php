<?php

namespace Xpressengine\Spotlight\Importers;

use Xpressengine\Spotlight\SpotlightItem;

abstract class AbstractImporter
{
    /**
     * @param $value
     * @return mixed
     */
    abstract public function convert($value);

    /**
     * @param $value
     * @return boolean
     */
    abstract public function checkTarget($value);
}
