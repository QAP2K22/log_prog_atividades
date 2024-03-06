function create_prompt(text,textType) {

    let promptValue = prompt(text)
    
    if (!promptValue.length >= 1) {
        while (true) {
            promptValue = prompt(text)

            if (promptValue && promptValue.length >= 1) break
            
        }
    }

    return textType(promptValue)
}