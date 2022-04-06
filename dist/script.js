new Vue({
    el: "#container",
    data: {
      show_device: "",
      iphone: {
        summary: {
          announced: {
            title: "Announced",
            value: "13 Oct 2020",
            icon: ""
          },
          os: {
            title: "OS",
            value: "iOS 14.4",
            icon: ""
          },
          weight: {
            title: "Weight",
            value: "228g",
            icon: ""
          },
          dim: {
            title: "Dimensions",
            value: "160.8 x 78.1 x 7.4 mm",
            icon: ""
          }
        },
        summary_large: {
          size: {
            title: "Size",
            value: '6.7"',
            subvalue: "1284x2778 px",
            icon: ""
          },
  
          camera: {
            title: "Camera",
            value: "12MP",
            subvalue: "2160p",
            icon: ""
          },
          memory: {
            title: "Memory",
            value: "6GB RAM",
            subvalue: "Apple A14 Bionic",
            icon: ""
          },
          battery: {
            title: "Battery",
            value: "3687mAh",
            subvalue: "Li-Ion",
            icon: ""
          }
        }
      },
      galaxy: {
        summary: {
          announced: {
            title: "Announced",
            value: "14 Jan 2021",
            icon: ""
          },
          os: {
            title: "OS",
            value: "Android 11, One UI 3.1",
            icon: ""
          },
          weight: {
            title: "Weight",
            value: "229g",
            icon: ""
          },
          dim: {
            title: "Dimensions",
            value: "165.1 x 75.6 x 8.9 mm",
            icon: ""
          }
        },
        summary_large: {
          size: {
            title: "Size",
            value: '6.8"',
            subvalue: "1440x3200 pixels",
            icon: ""
          },
  
          camera: {
            title: "Camera",
            value: "108MP",
            subvalue: "4320p",
            icon: ""
          },
          memory: {
            title: "Memory",
            value: "16GB",
            subvalue: "Exynos 2100",
            icon: ""
          },
          battery: {
            title: "Battery",
            value: "5000mAh",
            subvalue: "Li-Ion",
            icon: ""
          }
        }
      }
    },
    methods: {
      toggleDevice(device) {
        if (this.show_device == device) {
          this.show_device = '';
          return;
        }
  
        this.show_device = device;
      }
    }
  })