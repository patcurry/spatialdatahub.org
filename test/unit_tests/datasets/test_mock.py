from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from django.db.utils import IntegrityError
from django.test import TestCase
from unittest import mock

from datasets.models import Dataset
from accounts.models import Account

from cryptography.fernet import Fernet

import json
import os

User = get_user_model()


class MockModelTest(TestCase):
    """
    I want to mock some real accounts, how do I do that?
    """

    def setUp(self):
        self.u1 = User.objects.create_user(
            username="test_user", password="test_password")

        self.a1 = self.u1.account
        self.a1.affiliation = "Zentrum für Marine Tropenökologie"
        self.a1.save()

        self.ds1 = Dataset.objects.create(
            account=self.a1,
            author="Google",
            title="Google GeoJSON Example",
            description="Polygons spelling 'GOOGLE' over Australia",
            url="https://storage.googleapis.com/maps-devrel/google.json",
            public_access=True)

        # How do I mock this stuff?
        # Or, do I mock what the view brings retrieves?
        # I can put some fake data in here then give the data to the view
        # and get a mock response or stub or whatever
        self.ds2 = Dataset.objects.create(
           account=self.a1,
           author="zmtdummy",
           title="Password Protected Dataset",
           description="Just a page that requires login and password info",
           url="https://bitbucket.org/zmtdummy/geojsondata/raw/" +
               "ad675d6fd6e2256b365e79e785603c2ab454006b/" +
               "password_protected_dataset.json",
           dataset_user="zmtdummy",
           dataset_password="zmtBremen1991",
           public_access=False)



    def test_that_PASSWORD_PROTECTED_dataset_can_be_retrieved_MOCK(self):
        dataset = Dataset.objects.get(
            dataset_slug="password-protected-dataset")
        self.assertNotEqual(dataset.dataset_password, "zmtBremen1991")

