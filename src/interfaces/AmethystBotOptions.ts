import { Message } from "../../deps.ts";
import { Async } from "../utils/types.ts";
import { AmethystBot } from "./bot.ts";
import { CommandCooldown } from "./command.ts";
import { LogLevels } from "../utils/logger.ts";
/**A list of options for the amethyst bot*/
export type AmethystBotOptions = {
  owners?: (bigint | string)[];
  prefix?:
    | string
    | string[]
    | ((bot: AmethystBot, message: Message) => Async<string | string[]>);
  botMentionAsPrefix?: boolean;
  /**ignore bots when they try to use message commands, default to `true`*/
  ignoreBots?: boolean;
  messageQuotedArguments?: boolean;
  defaultCooldown?: CommandCooldown;
  ignoreCooldown?: (string | bigint)[];
  commandDir?: string;
  eventDir?: string;
  inhibitorDir?: string;
  prefixCaseSensitive?: boolean;
  logLevel?: LogLevels;
  /* Name of the bot used in the logger */
  botName?: string;
} & (
  | {
      guildOnly?: true;
      dmOnly?: false;
    }
  | {
      guildOnly?: false;
      dmOnly: true;
    }
);
