<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* __string_template__47905c16c3bd2abeeaff7c84cc99ca8eea3cf430112f5b9058e26703cc6fe5c2 */
class __TwigTemplate_fde9ee8a8e4c207d847202d34b0f0358fd0bfa00b994febd473e7c2887650b07 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "Your OTP is ";
        echo twig_escape_filter($this->env, ($context["code"] ?? null), "html", null, true);
        echo ".";
    }

    public function getTemplateName()
    {
        return "__string_template__47905c16c3bd2abeeaff7c84cc99ca8eea3cf430112f5b9058e26703cc6fe5c2";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("Your OTP is {{code}}.", "__string_template__47905c16c3bd2abeeaff7c84cc99ca8eea3cf430112f5b9058e26703cc6fe5c2", "");
    }
}
