import json
from pathlib import Path
from django.core.management.base import BaseCommand
from dashboardApp.models import Data
from django.utils.dateparse import parse_datetime
from datetime import datetime

class Command(BaseCommand):
    help = 'Load data from JSON file'

    def handle(self, *args, **kwargs):
        # Get the base directory (dashboard_project)
        base_directory = Path(__file__).resolve().parent.parent.parent.parent
        
        # Define the path to the JSON file
        json_file_path = base_directory / 'dashboardApp' / 'data' / 'jsondata.json'

        # Check if the file exists
        if not json_file_path.exists():
            self.stdout.write(self.style.ERROR(f"File not found: {json_file_path}"))
            return

        # Open the JSON file and load the data
        try:
            with open(json_file_path, 'r', encoding='utf-8') as file:
                data = json.load(file)
                for item in data:
                    # Check for missing required fields and provide default values if necessary
                    added = item.get('added')
                    if not added:
                        self.stdout.write(self.style.WARNING(f"Skipping entry with missing 'added' field: {item}"))
                        continue

                    published = item.get('published')
                    if not published:
                        self.stdout.write(self.style.WARNING(f"Skipping entry with missing 'published' field: {item}"))
                        continue

                    # Parse datetime fields
                    added_date = parse_datetime(added) or datetime.now()
                    published_date = parse_datetime(published) or datetime.now()

                    # Create the DataEntry object
                    Data.objects.create(
                        end_year=item.get('end_year'),
                        intensity=item.get('intensity'),
                        sector=item.get('sector'),
                        topic=item.get('topic'),
                        insight=item.get('insight'),
                        url=item.get('url'),
                        region=item.get('region'),
                        start_year=item.get('start_year'),
                        impact=item.get('impact'),
                        added=added_date,
                        published=published_date,
                        country=item.get('country'),
                        relevance=item.get('relevance'),
                        pestle=item.get('pestle'),
                        source=item.get('source'),
                        title=item.get('title'),
                        likelihood=item.get('likelihood'),
                    )
            self.stdout.write(self.style.SUCCESS('Data loaded successfully'))
        except UnicodeDecodeError as e:
            self.stdout.write(self.style.ERROR(f"Error reading the file: {e}"))
        except json.JSONDecodeError as e:
            self.stdout.write(self.style.ERROR(f"Error parsing JSON: {e}"))
