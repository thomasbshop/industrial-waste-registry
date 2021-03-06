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
