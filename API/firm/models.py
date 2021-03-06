from django.db import models
from django.urls import reverse
from django.utils.translation import gettext as _

# Create your models here.
class Company(models.Model):
    """
    General company details.
    """
    STATUS_CHOICES = []

    id = models.BigAutoField(primary_key=True)
    name = models.CharField(blank=True, default='', max_length=50)
    address = models.CharField(_("Address"), max_length=50)
    street = models.CharField(_("Street/Road"), max_length=50)
    county = models.CharField(choices=STATUS_CHOICES, max_length=50)
    sub_county = models.CharField(choices=STATUS_CHOICES, max_length=50)
    ward = models.CharField(choices=STATUS_CHOICES, max_length=50)
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
    

    class Meta:
        verbose_name = _("Activities")
        verbose_name_plural = _("Activitiess")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Activities_detail", kwargs={"pk": self.pk})
