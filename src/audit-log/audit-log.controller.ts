import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { AuditLogService } from './audit-log.service';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';
import { UpdateAuditLogDto } from './dto/update-audit-log.dto';

@ApiTags('Audit Logs')
@Controller('audit-log')
@ApiBearerAuth('JWT-auth')
export class AuditLogController {
  constructor(private readonly auditLogService: AuditLogService) {}

  @Post()
  @ApiOperation({ summary: 'Create audit log', description: 'Creates a new audit log entry (System use)' })
  @ApiResponse({ status: 201, description: 'Audit log created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid log data' })
  create(@Body() createAuditLogDto: CreateAuditLogDto) {
    return this.auditLogService.create(createAuditLogDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all audit logs', description: 'Retrieves all system audit logs (Admin only)' })
  @ApiResponse({ status: 200, description: 'Audit logs retrieved successfully' })
  findAll() {
    return this.auditLogService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get audit log by ID', description: 'Retrieves a specific audit log entry by ID' })
  @ApiParam({ name: 'id', description: 'Audit Log ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'Audit log found' })
  @ApiResponse({ status: 404, description: 'Audit log not found' })
  findOne(@Param('id') id: string) {
    return this.auditLogService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update audit log', description: 'Updates an audit log entry (Admin only)' })
  @ApiParam({ name: 'id', description: 'Audit Log ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'Audit log updated successfully' })
  @ApiResponse({ status: 404, description: 'Audit log not found' })
  update(@Param('id') id: string, @Body() updateAuditLogDto: UpdateAuditLogDto) {
    return this.auditLogService.update(+id, updateAuditLogDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete audit log', description: 'Deletes an audit log entry (Admin only)' })
  @ApiParam({ name: 'id', description: 'Audit Log ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'Audit log deleted successfully' })
  @ApiResponse({ status: 404, description: 'Audit log not found' })
  remove(@Param('id') id: string) {
    return this.auditLogService.remove(+id);
  }
}
