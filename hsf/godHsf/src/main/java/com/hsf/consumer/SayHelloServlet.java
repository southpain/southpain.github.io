
package com.hsf.consumer;
import com.hsf.services.SayHelloService;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class SayHelloServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //通过ServletContext获取Spring的上下文
        WebApplicationContext context= WebApplicationContextUtils.getWebApplicationContext(getServletContext());
        //通过BeanFactory获取服务的消费者SayHelloServiceConsumer
        SayHelloService sayHelloService= (SayHelloService) context.getBean("SayHelloServiceConsumer");

        PrintWriter out=response.getWriter();
        //调用服务
        out.println(sayHelloService.sayHello("xiwu.xxw"));
        out.close();
        return;
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}