import React from "react";
import "./assets/main.css";

class App extends React.Component {
  state = {
    hour: 1,
    minute: 40,
    second: 40,
    btn_diseble: false,
    interval: "",
    arr: [],
  };

  state = {
    hour: 0,
    minute: 0,
    second: 0,
    btn_diseble: false,
    interval: "",
    arr: [],
  };

  startStopWatch = () => {
    let i = setInterval(() => {
      const { hour, minute, second } = this.state;
      if (second === 59) {
        if (minute === 59) {
          this.setState({
            hour: hour + 1,
            minute: 0,
            second: 0,
          });
        } else
          this.setState({
            minute: minute + 1,
            second: 0,
          });
      } else
        this.setState({
          second: second + 1,
        });
    }, 1000);
    this.setState({
      btn_diseble: true,
      interval: i,
    });
  };

  stop = () => {
    clearInterval(this.state.interval);
    this.setState({
      btn_diseble: false,
    });
  };

  savedInterval = () => {
    const { hour, minute, second, arr } = this.state;
    arr.push(`${hour} : ${minute} : ${second}`);
    this.setState({
      arr: arr,
    });
  };

  clearInterval = () => {
    const { hour, minute, second, arr } = this.state;
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
      arr: [],
    });
  };

  // reverse watch
  reverseStopWatch = () => {
    let i = setInterval(() => {
      const { hour, minute, second } = this.state;
      if (second === 0) {
        if (minute === 0) {
          this.setState({
            hour: hour - 1,
            minute: minute + 59,
            second: second + 59,
          });
        } else
          this.setState({
            minute: minute - 1,
            second: second + 59,
          });
      } else {
        this.setState({
          second: second - 1,
        });
      }
      if (hour === 0 && minute === 0 && second === 0) {
        this.setState({
          hour: 0,
          minute: 0,
          second: 0,
        });
      }
    }, 1000);
    this.setState({
      btn_diseble: true,
      interval: i,
    });
  };

  stop = () => {
    clearInterval(this.state.interval);
    this.setState({
      btn_diseble: false,
    });
  };

  savedInterval = () => {
    const { hour, minute, second, arr } = this.state;
    arr.push(`${hour} : ${minute} : ${second}`);
    this.setState({
      arr: arr,
    });
  };

  clearInterval = () => {
    const { hour, minute, second, arr } = this.state;
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
      arr: [],
    });
  };

  render() {
    const { hour, minute, second, btn_diseble, arr } = this.state;
    return (
      <>
        <div className="container w-[1024px] m-auto">
          <div className=" div  border-spacing-1   m-auto border-4 border-purple-300 mt-10 rounded-xl py-[100px]">
            <div className="card text-center">
              <h1 className=" animate-charcter text-[40px] pt-10 font-bold">StopWatch</h1>
            </div>
            <div className="card-body text-center">
              <h2 className=" waviy text-[30px] font-bold ">
              <span> {hour}:{minute}:{second}</span>
              </h2>
            </div>
            <div className="pb-10   card-footer">
              <div className="flex gap-6 items-center justify-center mt-3">
                <div>
                  <button
                    disabled={btn_diseble}
                    onClick={this.startStopWatch}
                    className="bg-green-600 py-2 px-8 rounded-lg text-white hover:bg-green-700 active:bg-green-500 "
                  >
                    Start
                  </button>
                </div>
                <div>
                  <button
                    onClick={this.stop}
                    className="bg-yellow-500 py-2 px-8 rounded-lg text-white hover:bg-yellow-400 active:bg-yellow-300"
                  >
                    Stop
                  </button>
                </div>
                <div>
                  <button
                    onClick={this.savedInterval}
                    className="bg-blue-600 py-2 px-8 rounded-lg text-white hover:bg-blue-700 active:bg-blue-500"
                  >
                    Interval
                  </button>
                </div>
                <div>
                  <button
                    onClick={this.clearInterval}
                    className="bg-red-600 py-2 px-8 rounded-lg text-white hover:bg-red-700 active:bg-red-500"
                  >
                    Clear
                  </button>
                </div>
              </div>
              {/* -timer */}
              <div className="row text-center">
              <h1 className=" animate-charcter text-center py-4 text-[30px] font-bold ">
                Orqaga qaytish
              </h1>
              </div>
              <div className="flex gap-6 items-center justify-center mt-3">
                <div>
                  <button
                    disabled={btn_diseble}
                    onClick={this.reverseStopWatch}
                    className="bg-green-600 py-2 px-8 rounded-lg text-white hover:bg-green-700 active:bg-green-500 "
                  >
                    Start
                  </button>
                </div>
                <div>
                  <button
                    onClick={this.stop}
                    className="bg-yellow-500 py-2 px-8 rounded-lg text-white hover:bg-yellow-400 active:bg-yellow-300"
                  >
                    Stop
                  </button>
                </div>
                <div>
                  <button
                    onClick={this.savedInterval}
                    className="bg-blue-600 py-2 px-8 rounded-lg text-white hover:bg-blue-700 active:bg-blue-500"
                  >
                    Interval
                  </button>
                </div>
                <div>
                  <button
                    onClick={this.clearInterval}
                    className="bg-red-600 py-2 px-8 rounded-lg text-white hover:bg-red-700 active:bg-red-500"
                  >
                    Clear
                  </button>
                </div>
              </div>
              <div className="row">
                {arr.map((item, index) => {
                  return (
                    <div className=" flex content ml-[70px] mt-3" key={index}>
                      <h2 className="text-[25px] ">{item}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
