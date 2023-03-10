import { Module } from '@nestjs/common';
import { AuthModule } from 'libs/common/authorization/auth.module';
import { PanelsService } from '@api/src/panels/panels.service';
import { PanelsRepository } from '@api/src/panels/panels.repository';
import { PanelController } from '@api/src/panels/panel.controller';
import { PanelsController } from '@api/src/panels/panels.controller';

@Module({
  imports: [AuthModule],
  controllers: [PanelController, PanelsController],
  providers: [PanelsService, PanelsRepository],
})
export class PanelsModule {}
