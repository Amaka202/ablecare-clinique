export const config = {
    series: [{
      name: "Male",
      data: [20, 34, 81, 97, 200, 93, 20, 84, 98]
    },
    {
        name: "Female",
        data: [100, 21, 35, 41, 59, 62, 79, 81, 98]
    }
    ],
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: false
        },
        animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              enabled: true,
              speed: 300
            }
          },
      },
  
      dataLabels: {
        enabled: true
      },   
    
      stroke: {
        curve: "smooth"
      },
     
      title: {
        text: '',
        align: 'left'
      },
      
      colors:['#FA824C', '#9FD356'],
      
      fill: {
        colors: [ '#FA824C', '#9FD356' ]
      },
    
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        title: {
          text: 'Month'
        }
      },
  
      yaxis: {
        title: {
          text: 'Patients Performance'
        }
      }
    }
  }

  export const incomeData = {
    series: [{
        name: "",
        data: [250, 134, 81, 200]
      }
      ],
      options: {
        chart: {
          stacked: true,
          toolbar: {
            show: false
          },
        },
    
        dataLabels: {
          enabled: false
        },   
      
        stroke: {
          curve: "smooth"
        },
        
        colors:['#9FD356'],
        
        fill: {
          colors: [ '#9FD356']
        },
      
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr'],
          label: {
              show: false,
          },
          title: {
            text: ''
          }
        },
    
        yaxis: {
            show: false,
          title: {
            text: ''
          }
        }
      }
  }

  export const expenseData = {
    series: [{
      name: "",
      data: [200, 81, 120, 197]
    }
    ],
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: false
        },
      },
  
      dataLabels: {
        enabled: false
      },   
    
      stroke: {
        curve: "smooth"
      },
      
      colors:['#FA824C'],
      
      fill: {
        colors: [ '#FA824C']
      },
    
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr'],
        show: false,
        title: {
          text: ''
        }
      },
  
      yaxis: {
        show: false,
        title: {
          text: ''
        }
      }
    }
  }