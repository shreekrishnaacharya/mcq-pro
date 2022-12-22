/// <reference types="express" />
import { Request, Response, NextFunction } from '@damijs/core';
declare function ServerRender(req: Request, res: Response, next: NextFunction): any;
export default ServerRender;
