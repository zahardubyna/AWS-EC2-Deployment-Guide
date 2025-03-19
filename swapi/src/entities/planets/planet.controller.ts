import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseInterceptors,
  UploadedFiles,
  Query,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { PlanetService } from './planet.service';
import { PlanetCreateDto } from './planetDto/planet.create.dto';
import { PlanetUpdateDto } from './planetDto/planet.update.dto';
import { PlanetRelationDto } from './planetDto/planet.relation.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UsePermissionsGuard } from '@casl/guards/permission.guard';
import { EntitiesActions } from '@entities/entity.permissions';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { PlanetEntity } from '@entities/planets/planetEntity/planet.entity';
import { ApiBaseResponse } from '@decorators/api-base-response.decorator';

@ApiTags('Planets')
@ApiBearerAuth()
@ApiBaseResponse()
@Controller('planet')
export class PlanetController {
  constructor(private readonly planetServices: PlanetService) {}

  @Get()
  @UsePermissionsGuard(EntitiesActions.get, PlanetEntity)
  @ApiOperation({ summary: 'Get few planets' })
  @ApiOkResponse({ type: PlanetEntity, isArray: true })
  getFew(
    @Query('skip', ParseIntPipe) skip: number,
    @Query('limit', ParseIntPipe) limit: number,
  ) {
    return this.planetServices.getFew(skip, limit);
  }

  @Get(':id')
  @UsePermissionsGuard(EntitiesActions.get, PlanetEntity)
  @ApiParam({ name: 'id' })
  @ApiOperation({ summary: 'Get unique planet' })
  @ApiOkResponse({ type: PlanetEntity })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.planetServices.getOne(id);
  }

  @Post()
  @UsePermissionsGuard(EntitiesActions.create, PlanetEntity)
  @UseInterceptors(FilesInterceptor('files'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Create planet' })
  @ApiCreatedResponse({ type: PlanetEntity })
  create(
    @Body() body: PlanetCreateDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.planetServices.create(body, files);
  }

  @Put(':id')
  @UsePermissionsGuard(EntitiesActions.update, PlanetEntity)
  @UseInterceptors(FilesInterceptor('files'))
  @ApiConsumes('multipart/form-data')
  @ApiParam({ name: 'id' })
  @ApiOperation({ summary: 'Update planet' })
  @ApiOkResponse({ type: PlanetEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PlanetUpdateDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.planetServices.update(body, files, id);
  }

  @Delete(':id')
  @UsePermissionsGuard(EntitiesActions.delete, PlanetEntity)
  @ApiParam({ name: 'id' })
  @ApiOperation({ summary: 'Delete planet' })
  @ApiOkResponse({ type: PlanetEntity })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.planetServices.delete(id);
  }

  @Post('relation/:id')
  @UsePermissionsGuard(EntitiesActions.update, PlanetEntity)
  @ApiOperation({ summary: 'Create planet relations with' })
  @ApiCreatedResponse({ type: PlanetEntity })
  createRelationWith(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PlanetRelationDto,
  ) {
    return this.planetServices.createRelationWith(id, body);
  }
}
