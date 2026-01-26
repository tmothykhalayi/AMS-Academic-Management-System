import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { FeesService } from './fees.service';
import { CreateFeeDto } from './dto/create-fee.dto';
import { UpdateFeeDto } from './dto/update-fee.dto';

@ApiTags('Fees')
@Controller('fees')
@ApiBearerAuth('JWT-auth')
export class FeesController {
  constructor(private readonly feesService: FeesService) {}

  @Post()
  @ApiOperation({ summary: 'Create fee structure', description: 'Creates a new fee structure (Admin only)' })
  @ApiResponse({ status: 201, description: 'Fee structure created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid fee data' })
  create(@Body() createFeeDto: CreateFeeDto) {
    return this.feesService.create(createFeeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all fees', description: 'Retrieves all fee structures' })
  @ApiResponse({ status: 200, description: 'Fees retrieved successfully' })
  findAll() {
    return this.feesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get fee by ID', description: 'Retrieves a specific fee structure by ID' })
  @ApiParam({ name: 'id', description: 'Fee ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'Fee found' })
  @ApiResponse({ status: 404, description: 'Fee not found' })
  findOne(@Param('id') id: string) {
    return this.feesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update fee structure', description: 'Updates an existing fee structure (Admin only)' })
  @ApiParam({ name: 'id', description: 'Fee ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'Fee updated successfully' })
  @ApiResponse({ status: 404, description: 'Fee not found' })
  update(@Param('id') id: string, @Body() updateFeeDto: UpdateFeeDto) {
    return this.feesService.update(+id, updateFeeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete fee structure', description: 'Deletes a fee structure (Admin only)' })
  @ApiParam({ name: 'id', description: 'Fee ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'Fee deleted successfully' })
  @ApiResponse({ status: 404, description: 'Fee not found' })
  remove(@Param('id') id: string) {
    return this.feesService.remove(+id);
  }
}
