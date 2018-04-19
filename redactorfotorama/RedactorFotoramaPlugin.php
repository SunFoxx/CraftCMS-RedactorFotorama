<?php
namespace Craft;

/**
 * Redactor Clips plugin
 */
class RedactorFotoramaPlugin extends BasePlugin
{
	/**
	 * @return string
	 */
	public function getName()
	{
		return 'Redactor Fotorama';
	}

	/**
	 * @return string
	 */
	public function getVersion()
	{
		return '1.2.1';
	}

	/**
	 * @return string
	 */
	public function getSchemaVersion()
	{
		return '1.0.0';
	}

	public function getDeveloper()
	{
		return 'Pixel & Tonic';
	}

	public function getDeveloperUrl()
	{
		return 'http://pixelandtonic.com';
	}

	/**
	 *
	 */
	public function init()
	{
		if (!craft()->isConsole())
		{
			if (craft()->request->isCpRequest())
			{
				craft()->templates->includeJsResource('redactorfotorama/fotorama.js');
			}
		}
	}
}
