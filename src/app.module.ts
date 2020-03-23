import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutModule } from './workout/workkout.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'tylerbauman',
        password: 'fEpZjjUVSTvXe2XT',
        database: 'pokemon_db',
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gpl',
      buildSchemaOptions: {
        dateScalarMode: 'isoDate',
      },
    }),
    WorkoutModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
