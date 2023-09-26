#[no_mangle]
pub extern fn fibonacci(x: i32) -> i32 {
    if x <= 2 {
        1
    } else {
        fibonacci(x - 1) + fibonacci(x - 2)
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_fibonacci() {

    }
}