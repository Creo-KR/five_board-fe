import SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";

export default class WebSocketClient {
  endpoint: string;
  stompClient: StompJs.Client;

  constructor(url: string) {
    this.endpoint = url;
    this.stompClient = new StompJs.Client({
      brokerURL: `ws://${url}`,
      connectHeaders: {
        login: "user",
        passcode: "password",
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000, //자동 재 연결
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    this.stompClient.onConnect = (frame) => {
      this.stompClient.subscribe("/topic/public", (msg) => {
        console.log(msg);
      });
    };

    this.stompClient.onStompError = (frame) => {
      console.log("Broker reported error: " + frame.headers["message"]);
      console.log("Additional details: " + frame.body);
    };

    if (typeof WebSocket !== "function") {
      this.stompClient.webSocketFactory = () =>
        new SockJS(`http://${this.endpoint}`);
    }
  }

  activate() {
    this.stompClient.activate();
  }
}
