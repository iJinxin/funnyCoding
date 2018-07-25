package guide.restfullserver;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Quote {
    private String type;
    private JsonIgnoreProperties.Value value;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public JsonIgnoreProperties.Value getValue() {
        return value;
    }

    public void setValue(JsonIgnoreProperties.Value value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "Quote{" +
                "type='" + type + '\'' +
                ", value=" + value +
                '}';
    }

    public Quote() {


    }


}
