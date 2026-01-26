import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { AcademicSessionService } from './academic-session.service';
import { CreateAcademicSessionDto } from './dto/create-academic-session.dto';
import { UpdateAcademicSessionDto } from './dto/update-academic-session.dto';

@ApiTags('Academic Sessions')
@Controller('academic-session')
@ApiBearerAuth('JWT-auth')
export class AcademicSessionController {
  constructor(private readonly academicSessionService: AcademicSessionService) {}

  @Post()
  @ApiOperation({ summary: 'Create academic session', description: 'Creates a new academic session/semester (Admin only)' })
  @ApiResponse({ status: 201, description: 'Academic session created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid session data' })
  create(@Body() createAcademicSessionDto: CreateAcademicSessionDto) {
    return this.academicSessionService.create(createAcademicSessionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all academic sessions', description: 'Retrieves all academic sessions and semesters' })
  @ApiResponse({ status: 200, description: 'Sessions retrieved successfully' })
  findAll() {
    return this.academicSessionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get session by ID', description: 'Retrieves a specific academic session by ID' })
  @ApiParam({ name: 'id', description: 'Academic Session ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'Session found' })
  @ApiResponse({ status: 404, description: 'Session not found' })
  findOne(@Param('id') id: string) {
    return this.academicSessionService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update academic session', description: 'Updates academic session details (Admin only)' })
  @ApiParam({ name: 'id', description: 'Academic Session ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'Session updated successfully' })
  @ApiResponse({ status: 404, description: 'Session not found' })
  update(@Param('id') id: string, @Body() updateAcademicSessionDto: UpdateAcademicSessionDto) {
    return this.academicSessionService.update(+id, updateAcademicSessionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete academic session', description: 'Deletes an academic session (Admin only)' })
  @ApiParam({ name: 'id', description: 'Academic Session ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'Session deleted successfully' })
  @ApiResponse({ status: 404, description: 'Session not found' })
  remove(@Param('id') id: string) {
    return this.academicSessionService.remove(+id);
  }
}
