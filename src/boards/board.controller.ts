import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardController {
  constructor(private boardsService: BoardService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post('/')
  createBoard(@Body() createBoard: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoard);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }
}
