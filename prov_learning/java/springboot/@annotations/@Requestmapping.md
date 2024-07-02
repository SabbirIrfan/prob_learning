```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users") // Base mapping for all endpoints in this controller
public class UserController {

    @GetMapping // Maps GET requests to "/api/users"
    public String getAllUsers() {
        return "List of all users";
    }

    @GetMapping("/{userId}") // Maps GET requests to "/api/users/{userId}"
    public String getUserById(@RequestParam("userId") int userId) {
        return "User with ID: " + userId;
    }

    @PostMapping // Maps POST requests to "/api/users"
    public String createUser(@RequestBody User user) {
        return "User created: " + user.getName();
    }

    // ... other endpoints
}

// User class
class User {
    private String name;
    // ... other fields and methods
}
```

**Explanation:**

* **`@RestController`**: This annotation marks the class as a REST controller, which handles HTTP requests and returns responses.
* **`@RequestMapping("/api/users")`**: This annotation defines a base URL mapping for all endpoints within this controller. All endpoint URLs will start with "/api/users".
* **`@GetMapping`**: This annotation maps GET requests.
* **`@PostMapping`**: This annotation maps POST requests.
* **`@RequestParam("userId") int userId`**: This annotation retrieves the value of the "userId" query parameter from the request URL.
* **`@RequestBody User user`**: This annotation binds the request body to the `User` object.
* **`/{userId}`**: This is a path variable, allowing dynamic URL segments. The value of `userId` is accessible through the `@RequestParam` annotation.

**How it works:**

* When a client sends a GET request to "/api/users", the `getAllUsers()` method will be invoked.
* When a client sends a GET request to "/api/users/123", the `getUserById()` method will be invoked with `userId` set to 123.
* When a client sends a POST request to "/api/users" with a JSON payload representing a `User` object, the `createUser()` method will be invoked.

This is a basic example, and you can use different annotations and methods to implement more complex REST APIs.

