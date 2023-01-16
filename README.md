# Generator function
 ### Cấu trúc của generator là có dấu *phía sau function 
```
  function* ABC(){
    // yield: giống với return
    yield "Chạy lần đầu";
    yield "Chạy lần 2";
    .....
  }
```
- Là 1 hàm sẽ trả về nhiều giá trị khác nhau sau mỗi lần gọi
- **Generator fuction** rất đặt biệt vì khi bỏ nó vào vòng lặp vô tận nó sẽ không chạy vô tận mà chỉ luôn luôn trả về 1 giá trị duy nhất
 ## Công thức gọi hàm
 ```
  const iterator = ABC();
 ```
 - iterator sẽ chứa 3 phương thức: **next** , **return** và **throw**
![image](https://user-images.githubusercontent.com/114068860/212685120-2c1c8000-060b-46b5-8b27-6be7cdf430ba.png)
 
 ### next() : trả về 2 thuộc tính value và done

  ```
    iterator.next()
  ```
  - Dùng để chạy generator function, mỗi lần gọi next là mỗi lần yield sẽ được chạy
  - **value** là giá trị mỗi lần chạy của yield
  - **done** cho biết là đã kết thúc hàm hay chưa, **false** là chưa kết thúc

  **Ví dụ:**
```
  function* ABC(){
    yield "Chạy lần đầu";
    yield "Chạy lần 2";
  }
  const iterator = ABC();
  console.log(iterator.next())
  console.log(iterator.next())
```
  ![image](https://user-images.githubusercontent.com/114068860/212686428-ee5e0c62-faad-43ee-971f-8409263d919b.png)
  ![image](https://user-images.githubusercontent.com/114068860/212686710-58e9b8d0-f6de-4524-8605-84615b153c85.png)

  ### return : Dùng để kết thúc hàm generator
  ### throw: Dùng để trả ra lỗi khi thực thi hàm generator

  ```
    function* ABC(){
    yield "Chạy lần đầu";
    throw "Có lỗi xảy ra"
    yield "Chạy lần 2";
  }
  const iterator = ABC();
  console.log(iterator.next())
  console.log(iterator.next())
  ```
  ![image](https://user-images.githubusercontent.com/114068860/212688490-cd4bf519-6209-413c-9eac-a7035baf5fd3.png)