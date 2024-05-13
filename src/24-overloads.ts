{
  interface LogMessage {
    message: string;
    userId: number;
  }

  enum LogLevel {
    INFO = "info",
    ERROR = "error",
  }

  type LogFunction = {
    (message: string, userId: number, level: LogLevel): void;
    (message: LogMessage, level: LogLevel): void;
  };

  const log: LogFunction = (
    message: string | LogMessage,
    userIdOrLevel: number | LogLevel,
    level?: LogLevel
  ) => {};

  function LogFunctionNamed(
    message: string,
    userId: number,
    level: LogLevel
  ): void;
  function LogFunctionNamed(message: LogMessage, level: LogLevel): void;
  function LogFunctionNamed(
    message: unknown,
    userIdOrLevel: unknown,
    level?: LogLevel
  ): void {
    if (
      typeof message === "string" &&
      typeof userIdOrLevel === "number" &&
      level
    ) {
      console.log(
        `Mensagem: ${message}, userId: ${userIdOrLevel}, level: ${level}`
      );
    } else {
      function assertMessage(message: unknown): asserts message is LogMessage {
        if (
          !message ||
          typeof message !== "object" ||
          !["userId", "message"].every((key) => key in message)
        ) {
          throw new Error("Invalid message");
        }
      }

      function assertLevel(level: unknown): asserts level is LogLevel {
        if (
          !level ||
          typeof level !== "string" ||
          !Object.values(LogLevel).includes(level as any)
        ) {
          throw new Error("Invalid level");
        }
      }

      console.log(
        `Mensagem: ${message.message}, userId: ${message.userId}, level: ${userIdOrLevel}`
      );
    }
  }
}
