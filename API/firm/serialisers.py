from rest_framework import serializers
from .models import Company, Activities, Waste

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = (
            'id',
            'name',
            'address',
            'street',
            'county',
            'sub_county',
            'ward',
            'location',
        )

class ActivitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Activities
        fields = (
            'goods',
            'technology',
            'size',
            'sourced_nearby',
            'raw_materials',
            'products',
            'company',
        )

class WasteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Waste
        fields = (
            'waste_type',
            'disposal_mechanism',
            'potential_hazard',
            'eia',
            'air_quality',
            'company',
        )


class ProfileSerializer(serializers.ModelSerializer):
    activities = ActivitiesSerializer(many=True, read_only=True)
    waste = WasteSerializer(many=True, read_only=True)

    class Meta:
        model = Company
        fields = (
            'id',
            'name',
            'street',
            'county',
            'activities',
            'waste',
        )