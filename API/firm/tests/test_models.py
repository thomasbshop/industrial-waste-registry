from django.test import TestCase

from model_mommy import mommy

class TestCompany(TestCase):
    def setUp(self):
        self.models = mommy.make('firm.Company')

    def test_str(self):
        self.assertEquals(str(self.models), self.models.name)


class TestActivities(TestCase):
    def setUp(self):
        self.models = mommy.make('firm.Activities')

    def test_str(self):
        self.assertEquals(str(self.models), self.models.id)


class TestWaste(TestCase):
    def setUp(self):
        self.models = mommy.make('firm.Waste')

    def test_str(self):
        self.assertEquals(str(self.models), self.models.id)