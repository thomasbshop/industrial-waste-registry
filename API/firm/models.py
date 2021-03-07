from django.db import models
from django.urls import reverse
from django.utils.translation import gettext as _

# Create your models here.
class Company(models.Model):
    """
    General company details.
    """
    COUNTIES = [("Nairobi", "Nairobi"), ("Kisumu", "Kisumu"), ("Mombasa", "Mombasa")]
    SUB_COUNTIES = []
    WARDS = []

    id = models.BigAutoField(primary_key=True)
    name = models.CharField(blank=True, default='', max_length=50)
    address = models.CharField(_("Address"), max_length=50)
    street = models.CharField(_("Street/Road"), max_length=50)
    county = models.CharField(choices=COUNTIES, max_length=50)
    sub_county = models.CharField(choices=SUB_COUNTIES, max_length=50)
    ward = models.CharField(choices=WARDS, max_length=50)
    location = models.CharField(_("geolocation"), max_length=50)

    class Meta:
        verbose_name = _("Company")
        verbose_name_plural = _("Companys")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("company_detail", kwargs={"pk": self.pk})


class Activities(models.Model):
    '''
    Description of company's general activities.
    '''
    goods = models.CharField(_("Type of goods produced."), max_length=50)
    technology = models.CharField(_("Technology"), max_length=50)
    size = models.CharField(_("size"), max_length=50)
    sourced_nearby = models.BooleanField(_("Are raw materials sourced nearby."))
    raw_materials = models.CharField(_("the raw materials."), max_length=50)
    products = models.CharField(_("Finished products."), max_length=50)
    company = models.ForeignKey(
        "Company",
        blank=True,
        null=True,
        verbose_name=_("Company"),
        on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = _("Activities")
        verbose_name_plural = _("Activitiess")

    def __str__(self):
        return self.id

    def get_absolute_url(self):
        return reverse("Activities_detail", kwargs={"pk": self.pk})


class Waste(models.Model):
    '''
    Waste products
    '''
    waste_type = models.CharField(_("type of waste"), max_length=50)
    disposal_mechanism = models.CharField(_("Waste disposal mechanism."), max_length=50)
    potential_hazard = models.CharField(_("potential hazard"), max_length=50)
    eia = models.BinaryField(_("Environmental impact assessment."))
    air_quality = models.CharField(_("air quality"), max_length=50)
    company = models.ForeignKey(
        "Company",
        blank=True,
        null=True,
        verbose_name=_("Company"),
        on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = _("Waste")
        verbose_name_plural = _("Wastes")

    def __str__(self):
        return self.id

    def get_absolute_url(self):
        return reverse("waste_detail", kwargs={"pk": self.pk})
