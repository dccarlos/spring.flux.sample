package com.billpocket.ep.admin.web.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/entities")
public class ResourceController {

    @RequestMapping(value = "/one", produces = "application/json", method = RequestMethod.GET)
    @ResponseBody
    public MyEntity getMyEntity() {
        return new MyEntity("" + Math.random(), "" + Math.random());
    }

    @RequestMapping(value = "/three", produces = "application/json", method = RequestMethod.GET)
    @ResponseBody
    public List<MyEntity> getMyEntities() {
        return Arrays.asList(new MyEntity("" + Math.random(), "" + Math.random()), 
                new MyEntity("" + Math.random(), "" + Math.random()),
                new MyEntity("" + Math.random(), "" + Math.random()));
    }

    public static final class MyEntity {
        private String name;
        private String code;

        public MyEntity(String name, String code) {
            this.name = name;
            this.code = code;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getCode() {
            return code;
        }

        public void setCode(String code) {
            this.code = code;
        }
    }
}