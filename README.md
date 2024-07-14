PART 1: PROGRAMMING FUNDAMENTALS
Problem 1: Custom FizzBuzz(Tạo hàm in ra chuỗi FooBar)
- Tạo 1 hàm nhập vào 2 biến x và y
- Trong hàm ta dùng vòng lặp for để tạo biến i chạy từ 1 đến 100
- Dùng if else để tạo điều kiện in ra giá trị cho từng biến i
    + Nếu biến 1 chia dư cho cả x và y === 0 thì in ra chuỗi "FooBar"
    + Nếu biến 1 chỉ chia dư cho x === 0 thì in ra chuỗi "Foo"
    + Nếu biến 1 chỉ chia dư cho y === 0 thì in ra chuỗi "Bar"
    + Nếu biến 1 không chia dư cho x hoặc y thì in ra biến i.

Problem 2: Advanced Palindrome Check(Kiểm tra xem chuỗi đã cho có phải là chuỗi Palindrome)
- Tạo 1 hàm nhập vào 1 chuỗi s bất kỳ
- Sử dụng method normalize() để chuẩn hoá chuỗi Unicode về dạng NFD và dùng method replace() để loại bỏ các kí tự dấu.
- Tạo 1 biến cleanedStr để làm sạch chuỗi hơn bằng cách dùng replace để xác nhận chuỗi chỉ bao gồm chữ hoa với thường và số và dùng method toLowerCase() để định dạng chuỗi về chữ thường hết.
- So sánh coi giá trị của chuỗi cleanedStr có bằng giá trị của chuỗi cleanedStr khi bị đảo ngược lại(Palindrome) không.
- Tạo 1 biến và nhập 1 chuỗi bất kỳ vào và console.log nó ra nếu đúng thì là true sai là false.


PART 2: DATA STRUCTURES
Problem 3: Anagram Groups
- Tạo 1 hàm dùng để nhóm các chuỗi có các kí tự giống nhau trong mảng lại với nhau.
- Tạo 1 biến anagramGroups bằng 1 object rỗng.
- Dùng vòng lặp for để tạo 1 biến i dùng để duyệt từng chuỗi có trong mảng
- Tạo 1 biến sortedStr dùng để thành từng nhóm kí tự có trong chuỗi làm điều kiện để nhóm các chuỗi giống với biến lại.
VD: chuỗi "eat", sau khi sortedStr thì sẽ thành aet.
    chuỗi "tan", sau khi sortedStr thì sẽ thành ant.
- Tạo điều kiện If nếu phần tử trong mảng sau khi dùng sortedStr nếu trùng với nhóm nào thì sẽ được push vào nhóm đó:
VD:
    Chuỗi: "eat", Khóa: aet, Nhóm Anagram: {"aet":["eat"]}
    Chuỗi: "tea", Khóa: aet, Nhóm Anagram: {"aet":["eat","tea"]}
    Chuỗi: "tan", Khóa: ant, Nhóm Anagram: {"aet":["eat","tea"],"ant":["tan"]}
    Chuỗi: "ate", Khóa: aet, Nhóm Anagram: {"aet":["eat","tea","ate"],"ant":["tan"]}
    Chuỗi: "bat", Khóa: abt, Nhóm Anagram: {"aet":["eat","tea","ate"],"ant":["tan"],"abt":["bat"]}

Problem 4: Sparse Array Rotation



PART 3: BASIC WEB DEVELOPMENT
Problem 5: Dynamic HTML Page
- Tạo 3 file html, css, javascript
- File html:
    + Dùng thẻ link để liên kết với file css để style cho trang web
    + Dùng thẻ form để tạo ra form nhập dữ liệu và nút nhấn để submit dữ liệu lên
    + Tạo các thẻ input và label để nhập và hiển thị dữ liệu, thẻ select để hiển thị menu gồm 3 lựa chọn(thẻ option) để chọn
    + Tạo thẻ input với type là submit để nhấn và gửi giá trị submit lên web
    + Dùng thẻ script để liên kết với file JavaScript
    + Tạo 1 thẻ div với id riêng để hiển thị những thông tin đã nhập
- File css:
    + Dùng để style cho giao diện web
- File JavaScript:
    + Dùng document.getElementById để lấy id của form và lằng nghe sự kiện(addEventListener) và chạy hàm chức năng để lấy dữ liệu đã nhập
    + Tạo các biến giá trị theo thuộc tính for của label bên file html để lấy giá trị đã nhập vào ô đó
    + Tạo 1 biến displayDiv để lấy giá trị của thẻ div có id là displayInfo bên file HTML và hiển thị ra các giá trị đã nhập(${userName},${userAge}) và màu sác(${favoriteColor}) đã chọn.
    + Dùng document.body.style.backgroundColor = favoriteColor để thay đổi màu sắc của background bằng màu mình chọn


PART 4: BONUS (OPTIONAL)
Problem 6: Custom API Request
- Tạo file HTML để hiển thị ô input để nhập thông tin cần thiết
- Tạo file css để style cho trang web
- Tạo file JavaScript để lấy dữ liệu từ API và hiển thị ra màn hình web
    + Dùng document.getElementById để lấy ID của form và lắng nghe sự kiện submit cùng chức năng lấy API.
    + Tạo 1 biến city sẽ là giá trị mình nhập vào input bên file html
    + Tạo 1 biến apikey và dán api của mình trên website OpenWeather vào biến
    + Tạo 1 file url để lấy dữ liệu từ API gồm 2 giá trị là input nhập vào từ file html và apikey của mình.
    + Dùng fetch để lấy dữ liệu và response nó thành 1 chuỗi json và return json đó ra màn hình, nếu lỗi thì code sẽ chạy xuống catch để log lỗi ra.
    + tạo 1 hàm displayWeather với tham số là data và tạo thêm các giá trị để gán data vào và gọi ra màn hình.
    + In ra màn hình các giá trị đã lấy được từ API(${city}, ${country}, ${temperature}, ${humidity}, ${windSpeed} và ${description}).