import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { RegistrationsService } from './registrations.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';

@ApiTags('Registrations')
@Controller('registrations')
@ApiBearerAuth('JWT-auth')
export class RegistrationsController {
  constructor(private readonly registrationsService: RegistrationsService) {}

  @Post()
  @ApiOperation({ summary: 'Submit student registration', description: 'Creates a new student registration application' })
  @ApiResponse({ status: 201, description: 'Registration submitted successfully' })
  @ApiResponse({ status: 400, description: 'Invalid registration data' })
  create(@Body() createRegistrationDto: CreateRegistrationDto) {
    return this.registrationsService.create(createRegistrationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all registrations', description: 'Retrieves all student registration applications (Admin only)' })
  @ApiResponse({ status: 200, description: 'Registrations retrieved successfully' })
  findAll() {
    return this.registrationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get registration by ID', description: 'Retrieves a specific registration by ID' })
  @ApiParam({ name: 'id', description: 'Registration ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'Registration found' })
  @ApiResponse({ status: 404, description: 'Registration not found' })
  findOne(@Param('id') id: string) {
    return this.registrationsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update registration', description: 'Updates registration status or information' })
  @ApiParam({ name: 'id', description: 'Registration ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'Registration updated successfully' })
  @ApiResponse({ status: 404, description: 'Registration not found' })
  update(@Param('id') id: string, @Body() updateRegistrationDto: UpdateRegistrationDto) {
    return this.registrationsService.update(+id, updateRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registrationsService.remove(+id);
  }
}
