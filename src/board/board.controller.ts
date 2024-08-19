import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardController {
  constructor(private boardsService: BoardService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post('/')
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.boardsService.createBoard(title, description);
  }
}
