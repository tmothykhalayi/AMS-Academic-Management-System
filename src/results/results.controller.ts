import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { ResultsService } from './results.service';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';

@ApiTags('Results')
@Controller('results')
@ApiBearerAuth('JWT-auth')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Post()
  @ApiOperation({ summary: 'Upload results', description: 'Uploads student academic results (Admin only)' })
  @ApiResponse({ status: 201, description: 'Results uploaded successfully' })
  @ApiResponse({ status: 400, description: 'Invalid result data' })
  create(@Body() createResultDto: CreateResultDto) {
    return this.resultsService.create(createResultDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all results', description: 'Retrieves all academic results' })
  @ApiResponse({ status: 200, description: 'Results retrieved successfully' })
  findAll() {
    return this.resultsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get result by ID', description: 'Retrieves a specific result by ID' })
  @ApiParam({ name: 'id', description: 'Result ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'Result found' })
  @ApiResponse({ status: 404, description: 'Result not found' })
  findOne(@Param('id') id: string) {
    return this.resultsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update result', description: 'Updates academic result data (Admin only)' })
  @ApiParam({ name: 'id', description: 'Result ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'Result updated successfully' })
  @ApiResponse({ status: 404, description: 'Result not found' })
  update(@Param('id') id: string, @Body() updateResultDto: UpdateResultDto) {
    return this.resultsService.update(+id, updateResultDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete result', description: 'Deletes an academic result (Admin only)' })
  @ApiParam({ name: 'id', description: 'Result ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'Result deleted successfully' })
  @ApiResponse({ status: 404, description: 'Result not found' })
  remove(@Param('id') id: string) {
    return this.resultsService.remove(+id);
  }
}
